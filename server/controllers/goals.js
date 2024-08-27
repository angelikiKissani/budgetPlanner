import User from "../models/user.js";
import Goal from "../models/goal.js"
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
import {nanoid} from "nanoid";
import { v2 as cloudinary } from 'cloudinary';


///////ADD NEW GOAL///////

export const addGoal = async (req,res) =>{
    try {
        const { name,start_date,finish_date,goal_money,icon_name,icon_family,user_id } = req.body;
        console.log(user_id);
        if (!name) {
            return res.json({
                error: "Goal name is required",
            });
        }
        if (!start_date) {
            return res.json({
                error: "Start Date is required",
            });
        }
        if (!finish_date) {
            return res.json({
                error: "Money goal is required",
            });
        }
        if (!goal_money) {
            return res.json({
                error: "Goal name is required",
            });
        }
        if (!icon_name) {
            return res.json({
                error: "Icon Name is required",
            });
        }
        if (!icon_family) {
            return res.json({
                error: "Icon Family is required",
            });
        }
        const exist = await Goal.findOne({ user_id });
        if (!exist) {
            console.log("user with no goals")
            try{
                const goal = await new Goal({
                    name,start_date,finish_date,goal_money,icon_name,icon_family,user_id

                }).save();
                return res.json(goal)
            }catch (err) {
                console.log(err);}

        }
        else{
            console.log("user has goals")
            try{
                const name_exist= await Goal.find({user_id,name})
                if(name_exist[0]==null){
                    console.log("create new goal");
                    try{
                        const goal = await new Goal({
                            name,
                            start_date,
                            finish_date,
                            goal_money,
                            
                            icon_name,
                            icon_family,
                            user_id,
                            }).save();
                        return res.json(goal)
                    }catch (err) {
                        console.log(err);}
                }
                else{
                    return res.json({
                    error: "Goal name exists",
                })

                }
            }catch (err) {
                console.log(err);}
        }
        
    } catch (err) {
        console.log(err);
    }
    
}


//////////SHOW GOAL/////


export const showGoal = async (req,res) =>{
    try{
        const { user_id } = req.body;
        console.log(user_id);
        const goals= await Goal.find({user_id})
      return( res.json(goals))

    }catch (err) {
        console.log(err);
    }

}


////////DELETE GOAL////////

export const deleteGoal = async (req,res) =>{
    try{
        const {name, user_id } = req.body;
        
        const result= await Goal.findOneAndDelete({name,user_id})
      return( res.json(result))

    }catch (err) {
        console.log(err);
    }

}