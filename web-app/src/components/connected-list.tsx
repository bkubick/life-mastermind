import React from "react";


interface Props {
    title: string;
    listItems: string[];
}


interface State {}


class ConnectedList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    /**
     * Gets a list item with a bullet and a white line if it is the last item.
     * 
     * @param item  the text of the list item
     * @param lastItem whether or not this is the last item in the list
     * @returns the list item with a bullet and a white line if it is the last item
     */
    getListItem(item: string, lastItem: boolean = false): React.JSX.Element {
        return (
            <div className="list-item-wrapper">
                <div className="list-bullet"></div>
                <div className="list-item">
                    <div className="list-text">
                        { item }
                    </div>
                </div>
                { lastItem ? <div className="white-line"></div> : undefined }
            </div>
        )
    }

    /**
     * Gets the list items for the connected list.
     * 
     * @returns the list items
     */
    getListItems(): React.JSX.Element[] {
        var listItems: React.JSX.Element[] = [];

        for ( var i = 0; i < this.props.listItems.length; i++ ) {
            listItems.push(this.getListItem(this.props.listItems[i], i === this.props.listItems.length - 1));
        }

        return listItems;
    }

    render() {
        return (
            <div className='p-10 connected-list'>
                <h3 className='text-3xl font-bold mb-6'>{ this.props.title }</h3>
                <div className="list-wrapper">
                    <div className="primary-line"></div>
                    { this.getListItems() }
                </div>
            </div>
        )
    }
}

export default ConnectedList;
