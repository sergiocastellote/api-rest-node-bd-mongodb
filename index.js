import express from 'express';
import consign from 'consign';

const app = express();

//use consign to add scripts
consign()
.include('libs/middlewares.js')
.then('routes')
.include('libs/boots.js')
.into(app)