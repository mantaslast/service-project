import express from 'express';

const router = express.Router();

router.post('/users/login', async (req, res) => {
  res.send('Login');
});

router.post('/users/logout', async (req, res) => {
  res.send('Logout');
});

export default router;
