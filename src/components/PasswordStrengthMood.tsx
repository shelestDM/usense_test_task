import React from "react";
import { NeutrallFace, SadIcon, SmileFace } from "../Icons";
import { ReactNode } from 'react';
import { PasswordStrengthType } from "../context/PasswordStrengthContext";

interface MoodItem {
    icon: ReactNode;
    title: string;
}

type IMood = Record<PasswordStrengthType, MoodItem>;

const PasswordStrengthMood = React.memo(({ passwordStrength }: { passwordStrength: PasswordStrengthType }) => {

    let mood: IMood = {
        'easy': {
            icon: <SadIcon width="40" height="40" />,
            title: 'Your password is to weak'
        },
        'hard': {
            icon: <SmileFace width="40" height="40" />,
            title: 'Nice! Your password is strong!'
        },
        'medium': {
            icon: <NeutrallFace width="40" height="40" />,
            title: 'Good, but can be better'
        },
        'short': {
            icon: '',
            title: 'Password shuold be at least 8 characters'
        },
        'empty': {
            icon: '',
            title: 'Enter some characters in input to check your password strength'
        }
    }

    return (
        <div className="flex flex-col gap-2 items-center w-fit mx-auto mt-5">
            <div className={`w-10 h-10 ${mood[passwordStrength].icon ? 'animate-smoothAppear' : ''}`}>
                {mood[passwordStrength].icon}
            </div>
            <p className="text-[17px] font-medium">
                {mood[passwordStrength].title}
            </p>
        </div>
    )
});


export default PasswordStrengthMood;