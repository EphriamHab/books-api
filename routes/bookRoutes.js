import express from 'express';

import { getBooks, getBook, createBook, updateBook, deleteBook, getRecommendation, markFavorite, getFavoriteBooks} from '../controllers/bookControllers.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();


router.get('/recommendation', protect, getRecommendation);
router.get('/favorites', protect, getFavoriteBooks);
router.get('/all', protect, authorize('admin'), getBooks);

router.post('/', protect, authorize('user'), createBook);
router.get('/:id', protect, getBook);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, authorize('admin'), deleteBook);
router.patch('/:id/markFavorite', protect, markFavorite);



export default router;


