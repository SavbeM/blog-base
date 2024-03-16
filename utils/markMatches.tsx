import React from "react";

export const markMatches = (title: string, postName: string): JSX.Element => {
    const searchedWords = postName.split(' ');
    const titleWords = title.split(/(\s+)/);

    const modifiedTitle = titleWords.map((word: any, index: number) => {
        const matchingSubstring = searchedWords.find((substring: string) => word.includes(substring));

        if (matchingSubstring) {

            return (
                <React.Fragment key={index}>
                    {word.split(matchingSubstring).map((part: string, partIndex: number) => (
                            <React.Fragment key={partIndex}>
                            {partIndex > 0 && <span className=" bg-violet-300">{matchingSubstring}</span>}
                                <span>{part}</span>
            </React.Fragment>
        ))}
            </React.Fragment>
        );
        } else {

                return <span key={index}>{word}</span>;
            }
        });

        return <>{modifiedTitle}</>;
    };