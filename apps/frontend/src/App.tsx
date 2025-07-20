import { useEffect, useState } from 'react';

function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('/api/hello')
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	}, []);

	return <div>{message || 'Carregando...'}</div>;
}

export default App;
