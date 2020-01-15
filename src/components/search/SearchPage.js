import React, {Component} from "react";
import Filters from "./filters/filters";
import Results from "./Results/Results";
class SearchPage extends Component{
    render() {
        return(
            <div>
                <Filters/>
                <Results/>
            </div>
        )

    }

}
export default SearchPage;