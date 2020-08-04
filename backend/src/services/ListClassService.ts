import db from '@database/connection';

import convert from '@utils/convert';

import AppError from '@errors/AppError';

interface IPayload {
  week_day: number;
  subject: string;
  time: string;
}

class ListClassService {
  public async execute(payload: IPayload): Promise<any[]> {
    if (
      (!payload.week_day && payload.week_day !== 0) ||
      !payload.subject ||
      !payload.time
    ) {
      throw new AppError('Missing filters to search classes');
    }

    const timeInMinutes = convert.hourToMinutes(payload.time);

    const classes = await db('classes')
      .whereExists(function () {
        this.select('classes_schedule.*')
          .from('classes_schedule')
          .whereRaw('`classes_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`classes_schedule`.`week_day` = ??', [payload.week_day])
          .whereRaw('`classes_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`classes_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', payload.subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return classes;
  }
}

export default ListClassService;
