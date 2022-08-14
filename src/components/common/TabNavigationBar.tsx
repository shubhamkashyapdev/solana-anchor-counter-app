import React from 'react'

type Tab = {
    name: string;
}

interface TabNavigationBarProps {
    active: string;
    setActive: string;
    tabs: Tab[];
}

const TabNavigationBar: React.FC<TabNavigationBarProps> = ({ active, setActive, tabs }) => {
    return (
        <>
            {/* Buttons start from here  */}
            <div className="w-full">
                <div className="mt-20 ml-10  mb-10">
                    {
                        tabs.map(item => (
                            <button className="w-[160px] hover:bg-[#ffffff2a] hover:border-[#ffffff96] hover:border-2 text-white font-medium  h-12 rounded-md drop-shadow-lg md:text-[20px]">
                                {item.name}
                            </button>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

TabNavigationBar.defaultProps = {
    tabs: [
        {
            name: "Big Wins",
        },
        {
            name: "Lucky Wins",
        },
        {
            name: "Challenges",
        },
        {
            name: "Description",
        },
    ]
}

export default TabNavigationBar