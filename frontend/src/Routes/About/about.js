import React from 'react';


function About(props){
    //showMain={showMain}
    //showAbout={showAbout}
    //showInbox={showInbox}
    console.log('props.showMain in About',props.showMain)
    console.log('props.showAbout in About',props.showAbout)



    return(
        <>
        <div>
            <div>
           
                <div>
                    <header>
                        About Page
                        <h1>About Kelper</h1>
                    </header>
                </div>



                <div>
                    <p> 
                        Kelper is a platform where companies can come together to analyze when to cut loose a client. In order to grow businesses you must cater to the clients actually bringing in revenue and supporting your business. 
                        <br/>
                        <br/>
                        <br/>
                    </p>


                    
                    <h3>   Research/sources: </h3>
                        <a href="https://www.forbes.com/sites/allbusiness/2014/05/06/6-reasons-to-fire-a-client/?sh=70888eefc512">
                            Forbes - "6 Reasons to Fire a Client"
                        </a>

                    <br/>
                    <br/>

                        <a href="https://hbr.org/2011/08/its-time-to-fire-some-of-your.html
                        https://hbr.org/2015/02/when-and-why-to-part-ways-with-a-customer">
                            "When and why to part ways with a customer."
                        </a>

                    <br/>
                    <a href="https://builtin.com/recruiting/cost-of-turnover">
                    Cost of turnover</a>
                    <br/>

                    <br/>
                    <br/>
                    <a href="https://www.forbes.com/sites/johnhall/2019/05/09/the-cost-of-turnover-can-kill-your-business-and-make-things-less-fun/?sh=7abbe4457943">
                    Cost of turnover by forbes</a>
                    <br/>
                    <br/>
                        
                        <h3>Using the Pareto principle for customer analysis:</h3>

                        <a href="https://customerthink.com/pareto_s_principle_a_useful_tool_for_customer_analysis/"> Pareto???s principle ??? a useful tool for customer analysis? </a>
                    <br/>
                    <br/>
                    <a href="https://www.forbes.com/sites/davelavinsky/2014/01/20/pareto-principle-how-to-use-it-to-dramatically-grow-your-business/?sh=2e3ae3a3901d"> Forbes - How to use the Pareto Principle to grow your business</a>


                </div>
            </div>
        </div>
        </>
    )
}

export default About