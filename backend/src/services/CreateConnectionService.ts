import db from '@database/connection';

import AppError from '@errors/AppError';

interface IPayload {
  user_id: number;
}

class CreateConnectionService {
  public async execute(payload: IPayload): Promise<void> {
    const { user_id } = payload;

    const users = await db('users').select('id');

    const user = users.find(usr => usr.id === user_id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    await db('connections').insert({ user_id });
  }
}

export default CreateConnectionService;
