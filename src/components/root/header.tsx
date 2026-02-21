"use client";

import { UserProps } from '@/types/userProps';
import { LogoInv } from '../ui/logo';
import SearchBar from './search-bar';
import UserButton from './user-button';


interface Props {
    user: UserProps | null;
}
const Header = ({ user }: Props) => {
    return (
        <header className="grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-hidden p-2 border">
            <div className="col-span-2 flex items-center justify-between space-x-2 hover:cursor-pointer hover:opacity-80 ml-4">
                <LogoInv />
            </div>
            <div className='col-span-1 flex items-center justify-between space-x-2'>
                <div className="border-animation relative p-px rounded flex-1 self-stretch overflow-hidden flex items-center justify-center" aria-hidden="true">
                    <SearchBar />
                </div>
            </div>
            <div className='col-span-2 flex items-center justify-end space-x-2 hover:cursor-pointer hover:opacity-80'>
                <UserButton user={user} size="sm" />
            </div>
        </header>
    )
}

export default Header;