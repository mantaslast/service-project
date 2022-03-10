import express from 'express';

const router = express.Router();

/**
 * Create users
 */
router.post('/users', async (req, res) => {
  req.log.info('test');
  res.send(req.body);
});

/**
 * Get user Profile
 */
router.get('/users/me', async (req, res) => {
  res.send('Profile');
});

/**
 * Update user profile
 */
router.patch('/users/me', async (req, res) => {
  res.send('Profile Updated');
});

/**
 * Delete user profile
 */
router.delete('/users/me', async (req, res) => {
  res.send('Profile Deleted');
});

export default router;
