/**
 * Account-routes.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

import express from 'express'
import { AccountController } from '../controllers/account-controller.js'

export const router = express.Router()

const controller = new AccountController()

// Map HTTP verbs and route paths to controller actions.

// TODO: This is just for testing!!!!!!!!!!!
// Get all users
router.get('/users', (req, res, next) => controller.users(req, res, next))

// Log in
router.post('/login', (req, res, next) => controller.login(req, res, next))

// Register
router.post('/register', (req, res, next) => controller.register(req, res, next))
