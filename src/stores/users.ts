import { produce } from 'immer';
import { create } from 'zustand';

type User = {
	id: number;
	name: string;
	email: string;
};

type UserToBeUpdated = Omit<User, 'id'>;

interface UsersStore {
	users: User[];
	addUser: (user: UserToBeUpdated) => void;
}

export const useUsersStore = create<UsersStore>((set, get) => {
	const setState = (fn: (state: UsersStore) => void) => set(produce(fn));

	return {
		users: [],

		addUser(user) {
			const newUser = {
				id: get().users.length + 1,
				name: user.name,
				email: user.email
			};

			setState((state) => {
				state.users.push(newUser);
			});
		}
	};
});
