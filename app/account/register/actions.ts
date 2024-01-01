'use server';

import { z } from 'zod';

const createUserActionResponse = {
  errorMessage: '',
  StatusOK: true,
};

export default async function createUser(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const username = formData.get('username');
  const password = formData.get('password');

  if (!email || !username || !password) {
    createUserActionResponse.StatusOK = false;
    createUserActionResponse.errorMessage =
      'You must provide username, email and password';
  }

  return createUserActionResponse;
}
