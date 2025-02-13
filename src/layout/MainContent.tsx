import React from 'react';

function MainContent({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex-grow bg-gray-100">
            {children}
        </main>
    )
}

export default MainContent;