import express from 'express';

import { list } from '@/controllers/position';

const router = express.Router();

router.get('/position', list);

export const position = router;
