import {h, Component} from 'composi'
import {title} from './components/title'
import {Clock} from './components/clock'

// Set state on component.
// Will cause component to render.
title.state = 'Clock'

const clock = new Clock()