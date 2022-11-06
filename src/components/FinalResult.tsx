import React from 'react';
import QuizStyle from './Quiz.style';
import { Card, Typography, Button } from '@mui/material';
import { clsx } from 'clsx';
import result from '../assests/result.svg';
import { useNavigate } from 'react-router-dom';

const FinalResult: React.FC<any> = () => {
	const classes = QuizStyle();
	const navigate = useNavigate();
	const resultNum = JSON.parse(localStorage.getItem('result') || '0');
	console.log(resultNum);

	return (
		<div className={classes.quiz}>
			<div>
				<Typography className={classes.Title}>County Quiz</Typography>

				<Card className={clsx(classes.card, classes.cardResult)}>
					<img src={result} alt='result' />
					<Typography className={classes.resultTitle}>Results</Typography>
					<Typography className={clsx(classes.resultText, classes.resultTitle)}>
						You got <span className={classes.numResult}>{resultNum}</span>{' '}
						correct answer
					</Typography>

					<Button
						className={clsx(classes.againBtn, classes.resultTitle)}
						onClick={() => {
							localStorage.removeItem('result');
							navigate('/');
						}}>
						Try again
					</Button>
				</Card>
			</div>
		</div>
	);
};

export default FinalResult;
