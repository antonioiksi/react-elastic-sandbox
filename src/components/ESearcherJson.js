import React from 'react'
import axios from 'axios'


export default class ESearcherJson extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {JsonQuery:{'query':{'match_all':''}}, JsonResult:''}
    }




    handleSubmit(e) {
        //
        //getresult from axion

        const thiz = this;

        var result={'search': Object.assign({}, {JsonQuery:this.state.JsonQuery})};
    var resjson={}
        /*
        var session_url = 'http://localhost:9200';
        var config = {
            baseURL: 'http://localhost:9200',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        axios.get(session_url,config).then(function(response){
            this.setState({JsonResult: response});
            console.log('Authenticated');
        }).catch(function (error){
            console.log('Error on Authentication');
        });*/
/*
        fetch('http://localhost:9200/', {
            method: 'GET',
        }).then(function (a) {
            return a.json(); // call the json method on the response to get JSON
        }).then(function (json) {
            console.log(json)
            //resjson=Object.assign({},json);
            thiz.setState({JsonResult: {json}});
            //result={'esresponse': Object.assign({}, {json})};
        })
    */

        fetch("http://localhost:9200/_search", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: thiz.state.JsonQuery
        }).then(function (a) {
            return a.json();
        }).then(function (json) {
            console.log(json)
            //resjson=Object.assign({},json);
            thiz.setState({JsonResult: {json}});
            //result={'esresponse': Object.assign({}, {json})};
        })



        //this.setState({JsonResult: {resjson}});
        //this.setState({result});
        //alert('JsonResult: ' + JSON.stringify(result, null, 2));
        //this.setState({JsonResult: result});
        //alert('JsonResult: ' + JSON.stringify(this.state.JsonResult, null, 2));
        //console.log(result);
        e.preventDefault();

    }

    handleChange(e) {
        this.setState({JsonQuery: e.target.value});
    }

    render() {
        const jsonquery = this.state.JsonQuery;
        const jsonresult = this.state.JsonResult;

        return(
            <div>
                <h1>ESearcherJson</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        JSON Query:
                        <textarea value={JSON.stringify(jsonquery)} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Search" />
                </form>
                <div>{JSON.stringify(jsonresult, null, 2)}</div>
            </div>
        )
    }
}