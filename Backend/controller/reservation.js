import { json } from "express";
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req,res,next)=>{
    const {firstName,lastName,email,phone,date,time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill all the components",400));
    }

    try {
        await Reservation.create({firstName,lastName,email,phone,date,time});
        res.status(201).json({
            success: true,
            message: "Reservation sent successfully!",
        });
    } catch (error) {
        if(error.name === 'ValidationError'){
            // const ValidationErrors = Object.values(error.erors).map( err => err.message);
              // Log the entire error object for debugging
            const ValidationErrors = error.errors ? Object.values(error.errors).map(err => err.message) : [];

            return next(new ErrorHandler(ValidationErrors.join(' , '),400));
        }
        return next(error);
    }
};