import React from 'react';
import ReactLoading from 'react-loading';
import { blue_color } from '../UI/contants';

const Loading = () => (
	<ReactLoading type={"balls"} color={blue_color} height={667} width={375} />
);

export default Loading;