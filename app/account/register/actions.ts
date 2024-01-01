'use server';

import { z } from 'zod';

export default async function createUser(prevState: any, formData: FormData) {
  const s = formData.get('email');
  return {
    errorMessage: '',
    ok: true,
  };
}
