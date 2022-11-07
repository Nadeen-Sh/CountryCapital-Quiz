import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import QuizStyle from './Quiz.style';
import axios from 'axios';
import brain from '../assests/brain.png';
import { clsx } from 'clsx';
import Options from './Options';
import { useNavigate } from 'react-router-dom';

const Initial: React.FC<any> = () => {
	const classes = QuizStyle();
	const navigate = useNavigate();

	return (
		<div className={classes.quiz}>
			<div>
				<Typography className={classes.Title}>Country Quiz</Typography>

				<Card className={clsx(classes.card, classes.cardResult)}>
					<img
						src={brain}
						alt='brain'
						className={clsx(classes.boyLogo, classes.brainLogo)}
					/>
					<Typography className={clsx(classes.resultTitle, classes.intialText)}>
						Guess the capital of the country
					</Typography>
					<Button
						className={clsx(
							classes.againBtn,
							classes.resultTitle,
							classes.playBtn
						)}
						onClick={() => {
							navigate('/quiz');
						}}>
						Lets Play
					</Button>
				</Card>
			</div>
		</div>
	);
};

export default Initial;
