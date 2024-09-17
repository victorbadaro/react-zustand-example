import { Header } from './components/header';
import { UsersList } from './components/users-list';
import { useUsersStore } from './stores/users';

export function App() {
	const users = useUsersStore((store) => store.users);

	return (
		<div className="space-y-8 min-h-screen bg-zinc-900 text-zinc-100">
			<Header />

			<main className="container mx-auto">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-semibold">Users</h1>

					{users.length > 0 ? (
						<UsersList />
					) : (
						<div className="flex items-center justify-center h-72 border border-dashed border-zinc-700 rounded-lg">
							<p>Users list is empty.</p>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
