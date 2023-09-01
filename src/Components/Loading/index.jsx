import React from 'react';
import ReactLoading from 'react-loading';
import { colors } from '../UI/contants';

const Loading = () => (
	<ReactLoading type={"balls"} color={colors.blue_color}/>
);

export default Loading;