import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export function UsersList() {
	return (
		<div className="border border-zinc-700 rounded-lg overflow-hidden">
			<Table className="text-zinc-400">
				<TableHeader className="bg-zinc-800">
					<TableRow className="border-zinc-700 hover:bg-zinc-800">
						<TableHead className="text-zinc-100">ID</TableHead>
						<TableHead className="text-zinc-100">Full name</TableHead>
						<TableHead className="text-zinc-100">E-Mail</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow className="border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100">
						<TableCell>1</TableCell>
						<TableCell>Victor Badaró</TableCell>
						<TableCell>victor.badaro@fatec.sp.gov.br</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
