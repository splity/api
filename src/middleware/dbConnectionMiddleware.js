import { connectToDatabase } from '../services/mongodb';

export default async (resolve, root, args, context, info) => {
  await connectToDatabase();
  const result = await resolve(root, args, context, info);
  return result;
};
