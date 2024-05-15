import React from "react";

interface NailDropdownProps {
    index: number;
    title: string;
    options: any;
    polar: boolean;
    sendClicked: (id: number) => void;
    sendData: (data: string) => void;
};

const NailDropdown: React.FC<NailDropdownProps> = ({ index, title, options, polar, sendClicked, sendData }) => {
    return (
        <>
            <div id="NailDropdown">
                <div id="">
                    
                </div>
            </div>
        </>
    );
};

export default NailDropdown;