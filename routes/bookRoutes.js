import express from 'express';

import { getBooks, getBook, createBook, updateBook, deleteBook, getRecommendation, markFavorite} from '../controllers/bookControllers.js';


const router = express.Router();


router.get('/recommendation', getRecommendation);

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', getBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.patch('/:id/markFavorite', markFavorite);

export default router;


