import React from 'react';
import {ReactComponent as SearchSvg} from './../assets/icon/search.svg';


type Props = {
    filter: string;
    setFilter: (filterString: string) => void;
}

const Filter = ({filter, setFilter}: Props) => {
    return (
        <div className={"search"}>
            <div className={"input-group "}>
                <span className={"input-group-text"}>
                    <SearchSvg/>
                </span>
                <input
                    onChange={e => setFilter(e.target.value)}
                    className={"form-control"}
                    placeholder="Filter by author..."
                    value={filter}
                    type="text"/>
            </div>
        </div>

    );
};

export default Filter;