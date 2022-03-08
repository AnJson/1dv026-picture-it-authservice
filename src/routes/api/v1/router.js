/**
 * API v1 routes.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

import express from 'express'
import { router as accountRouter } from './account-router.js'

export const router = express.Router()

router.get('/', (req, res) => res.json({ message: 'Welcome to version 1 of the auth-service!' }))
router.use('/', accountRouter)
