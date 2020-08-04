import db from '@database/connection';

class CountConnectionsService {
  public async execute(): Promise<number> {
    const [{ total }] = await db('connections').count('* as total');

    return total;
  }
}

export default CountConnectionsService;
