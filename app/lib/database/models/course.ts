import { Schema, model } from 'mongoose';

interface ICourse {
  name: string;
  created: Date;
  author: string;
  description: string;
  meta: {
    language: string[];
    programmingLang: string[];
    level: number;
  };
  // lessons: [
  //   {
  //     name: string;
  //     blocks: [
  //       {
  //         type: string;
  //         content: string;
  //       }
  //     ];
  //   }
  // ];
}

const courseSchema = new Schema<ICourse>({
  name: { type: String, required: true },
  created: { type: Date, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  meta: {
    language: { type: String, required: true },
    programmingLang: { type: String, required: true },
    level: { type: Number, required: true },
  },
});

export const Course = model<ICourse>('Course', courseSchema);
