import { LoginForm } from './components/ui/login-form';

function App() {
	return (
		<div className="min-h-screen flex">
			<div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
				<div className="w-full max-w-md space-y-8">
					<LoginForm />
				</div>
			</div>

			<div className="hidden lg:block flex-1 relative">
				<div className="absolute inset-0 bg-black/10">
					<img
						src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
						alt="Ícone de computador portátil"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
