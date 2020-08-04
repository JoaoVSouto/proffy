import db from '@database/connection';

import convert from '@utils/convert';

import AppError from '@errors/AppError';

interface IScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface IPayload {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: IScheduleItem[];
}

class CreateClassService {
  public async execute(payload: IPayload): Promise<void> {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = payload;

    const trx = await db.transaction();

    try {
      const [user_id] = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const [class_id] = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });

      const classSchedule = schedule.map(scheduleItem => ({
        ...scheduleItem,
        from: convert.hourToMinutes(scheduleItem.from),
        to: convert.hourToMinutes(scheduleItem.to),
        class_id,
      }));

      await trx('classes_schedule').insert(classSchedule);

      await trx.commit();
    } catch {
      await trx.rollback();

      throw new AppError('Unexpected error while creating new class');
    }
  }
}

export default CreateClassService;
