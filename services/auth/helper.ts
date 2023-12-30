import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

function AuthHelper() {
  const compare = async (
    inputOne: string,
    inputTwo: string
  ): Promise<boolean> => {
    const result = await bcrypt.compare(inputOne, inputTwo);
    return result;
  };

  const hash = async (input: string): Promise<string> => {
    const hashedInput = await bcrypt.hash(input, SALT_ROUNDS);
    return hashedInput;
  };

  return {
    hash: hash,
    compare: compare,
  };
}

export default AuthHelper;
