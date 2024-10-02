import { produce } from 'immer';
import { create } from 'zustand';

type User = {
	id: number;
	name: string;
	email: string;
};

type UserToBeAdded = Omit<User, 'id'>;

interface UsersStore {
	users: User[];
	addUser: ({ name, email }: UserToBeAdded) => void;
}

export const useUsersStore = create<UsersStore>((set, get) => {
	const setState = (fn: (state: UsersStore) => void) => set(produce(fn));

	return {
		users: [],

		addUser({ name, email }) {
			const userToBeAdded = {
				id: get().users.length + 1,
				name,
				email
			};

			setState((state) => {
				state.users.push(userToBeAdded);
			});
		}
	};
});
