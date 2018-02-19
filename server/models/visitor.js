const mongoose = require('mongoose');
const VisiterSchema = new mongoose.Schema({
	counter: Number,
	date: Date
})

const Visitor = mongoose.model("Visitor", VisiterSchema)