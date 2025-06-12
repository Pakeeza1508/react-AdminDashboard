import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus, Trash2, Pencil } from "lucide-react";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{ id: 1, name: "Google", connected: true, icon: "/google.jpeg" },
		{ id: 2, name: "Facebook", connected: false, icon: "/facebook.jpeg" },
		{ id: 3, name: "Twitter", connected: true, icon: "/x.png" },
	]);

	const [showAddForm, setShowAddForm] = useState(false);
	const [newAccount, setNewAccount] = useState({ name: "", icon: "", connected: false });
	const [isEditingId, setIsEditingId] = useState(null);

	const handleAddOrEdit = () => {
	if (!newAccount.name.trim() || !newAccount.icon.trim()) {
		alert("Please fill in both the account name and icon URL.");
		return;
	}

	if (isEditingId) {
		setConnectedAccounts((prev) =>
			prev.map((acc) =>
				acc.id === isEditingId ? { ...acc, ...newAccount } : acc
			)
		);
	} else {
		setConnectedAccounts((prev) => [
			...prev,
			{ ...newAccount, id: Date.now() },
		]);
	}

	setNewAccount({ name: "", icon: "", connected: false });
	setIsEditingId(null);
	setShowAddForm(false);
};

	const handleEdit = (account) => {
		setNewAccount(account);
		setIsEditingId(account.id);
		setShowAddForm(true);
	};

	const handleDelete = (id) => {
		setConnectedAccounts((prev) => prev.filter((acc) => acc.id !== id));
	};

	return (
		<SettingSection icon={HelpCircle} title={"Connected Accounts"}>
			{connectedAccounts.map((account) => (
				<div key={account.id} className='flex items-center justify-between py-3'>
					<div className='flex gap-2 items-center'>
						<img src={account.icon} alt='icon' className='size-6 object-cover rounded-full' />
						<span className='text-gray-300'>{account.name}</span>
					</div>
					<div className='flex gap-2'>
						<button
							className={`px-3 py-1 rounded ${
								account.connected
									? "bg-green-600 hover:bg-green-700"
									: "bg-gray-600 hover:bg-gray-700"
							} transition`}
							onClick={() =>
								setConnectedAccounts((prev) =>
									prev.map((acc) =>
										acc.id === account.id
											? { ...acc, connected: !acc.connected }
											: acc
									)
								)
							}
						>
							{account.connected ? "Connected" : "Connect"}
						</button>
						<button onClick={() => handleEdit(account)} className='text-yellow-400 hover:text-yellow-300'>
							<Pencil size={18} />
						</button>
						<button onClick={() => handleDelete(account.id)} className='text-red-400 hover:text-red-300'>
							<Trash2 size={18} />
						</button>
					</div>
				</div>
			))}

			{showAddForm && (
				<div className='mt-4 space-y-2'>
					<input
						type='text'
						placeholder='Account Name'
						value={newAccount.name}
						onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
						className='w-full bg-gray-800 text-white p-2 rounded'
					/>
					<input
						type='text'
						placeholder='Icon URL'
						value={newAccount.icon}
						onChange={(e) => setNewAccount({ ...newAccount, icon: e.target.value })}
						className='w-full bg-gray-800 text-white p-2 rounded'
					/>
					<button
						onClick={handleAddOrEdit}
						className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full'
					>
						{isEditingId ? "Save Changes" : "Add Account"}
					</button>
				</div>
			)}

			<button
				className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'
				onClick={() => {
					setShowAddForm((prev) => !prev);
					setIsEditingId(null);
					setNewAccount({ name: "", icon: "", connected: false });
				}}
			>
				<Plus size={18} className='mr-2' />
				{showAddForm ? "Cancel" : "Add Account"}
			</button>
		</SettingSection>
	);
};

export default ConnectedAccounts;
