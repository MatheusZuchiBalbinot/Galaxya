import { useState } from 'react';

function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();
			setMessage(data.message || 'Login realizado com sucesso!');
		} catch {
			setMessage('Erro ao tentar logar.');
		}
	};

	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
			<img
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
				alt="Logo"
				className="mb-8 w-24 h-24"
			/>
			<h2 className="text-2xl font-semibold mb-6">Login</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-80 gap-4 bg-white p-6 rounded-md shadow-md"
			>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<input
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<button
					type="submit"
					className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
				>
					Entrar
				</button>
			</form>
			{message && (
				<p className="mt-6 text-center text-red-600">{message}</p>
			)}
		</div>
	);
}

export default App;
