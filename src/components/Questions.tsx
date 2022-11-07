import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import QuizStyle from './Quiz.style';
import axios from 'axios';
import boyLogo from '../assests/boyLogo.svg';
import { clsx } from 'clsx';
import Options from './Options';
import { useNavigate } from 'react-router-dom';

const Questions: React.FC<any> = () => {
	const [question, setQuestion] = React.useState<any>('');
	const [answer, setAnswer] = React.useState<any>('');
	const [selected, setSelected] = React.useState<any>('');
	const [options, setOptions] = React.useState<any>([]);
	const [optionColor, setOptoionColor] = React.useState<any>('orange');
	const [count, setCount] = React.useState<any>(1);
	const [trueAnswer, isTrueAnswer] = React.useState<any>(1);
	const classes = QuizStyle();
	const navigate = useNavigate();

	function getMultipleRandom(arr: any, num: any) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());

		return shuffled.slice(0, num);
	}

	const getQuestion = () => {
		axios
			.get('https://restcountries.com/v2/all')
			.then(({ data }) => {
				let item = data[Math.floor(Math.random() * data.length)];
				setAnswer(item.name);
				setQuestion(item.capital);

				const arrOptions = getMultipleRandom(data, 3);
				let filteredArray = arrOptions.map((item: any) => {
					return item.name;
				});
				filteredArray.push(item.name);
				setOptions([...filteredArray]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	React.useEffect(() => {
		getQuestion();
	}, []);

	const updateSelected = (data: any) => {
		setSelected(data);
	};

	const nextQuestion = () => {
		if (count === 5) {
			navigate('/result');
		} else {
			setOptoionColor('orange');
			if (selected === answer) {
				setOptoionColor('green');
				isTrueAnswer(trueAnswer + 1);
				localStorage.setItem('result', JSON.stringify(trueAnswer));
			} else {
				setOptoionColor('red');
			}
			setTimeout(() => {
				getQuestion();
				setOptoionColor('orange');
				setCount(count + 1);
			}, 1000);
		}
	};

	return (
		<div className={classes.quiz}>
			<div>
				<Typography className={classes.Title}>County Quiz</Typography>

				<Card className={classes.card}>
					<img src={boyLogo} alt='logo' className={classes.boyLogo} />
					<Typography className={clsx(classes.question, classes.Title)}>
						{question} is the Capital of
					</Typography>
					<div>
						<Options
							updateSelected={updateSelected}
							options={options}
							optionColor={optionColor}
							answer={answer}
						/>
					</div>
					<Button className={classes.btnText} onClick={() => nextQuestion()}>
						Next
					</Button>
				</Card>
			</div>
		</div>
	);
};

export default Questions;
