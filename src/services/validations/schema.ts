import join from 'joi';

const user = join.object({
  email: join.string().email().required(),
  password: join.string().min(6).required(),
});

export = { user };