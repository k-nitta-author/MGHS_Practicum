import React, { useEffect, useState } from 'react'

// include this in the admin dashboard and you'll see the stats of the various activities
const ActivityStatView = () => {

    const [ActivityStats, SetActivityStats] = useState({})

    useEffect(() => {
        async function FetchActivityStats(){
            const URL = "https://mghs-backend.onrender.com/activity/stats"

            const response = await fetch(URL, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const res_data = await response.json()
            console.log(res_data)
            SetActivityStats(res_data)
        }
        FetchActivityStats()
    }, [])    

    return (
        <section className="progress_metrics_view">
            <section className="block-section">
                <section className="block">
                    <h4>Number of Activities</h4>
                    <p>Total number of activities available.</p>
                    <strong>{ActivityStats.activity_row_count} activities</strong>
                </section>

                <section className="block">
                    <h4>Incomplete Activities</h4>
                    <p>Number of activities that are not yet completed.</p>
                    <strong>{ActivityStats.incomplete_activities} activities incomplete</strong>
                </section>

                <section className="block">
                    <h4>Complete Activities</h4>
                    <p>Number of activities that have been completed.</p>
                    <strong>{ActivityStats.complete_activities} activities complete</strong>
                </section>

                <section className="block">
                    <h4>Incomplete Subscriptions</h4>
                    <p>Number of subscriptions that are not yet completed.</p>
                    <strong>{ActivityStats.incomplete_subs} subscriptions incomplete</strong>
                </section>

                <section className="block">
                    <h4>Complete Subscriptions</h4>
                    <p>Number of subscriptions that have been completed.</p>
                    <strong>{ActivityStats.complete_subs_count} subscriptions complete</strong>
                </section>

                <section className="block">
                    <h4>Least Complete Activity</h4>
                    <p>Activity with the least completions.</p>
                    <strong>{ActivityStats.least_complete_activity} completions</strong>
                </section>

                <section className="block">
                    <h4>Most Complete Activity</h4>
                    <p>Activity with the most completions.</p>
                    <strong>{ActivityStats.most_complete_activity} completions</strong>
                </section>

                <section className="block">
                    <h4>No. Of Subscriptions</h4>
                    <p>Total number of subscriptions.</p>
                    <strong>{ActivityStats.subscriptions_count} subscriptions</strong>
                </section>
            </section>
        </section>
    );
};

export default ActivityStatView;
