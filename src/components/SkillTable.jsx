import React, { Component } from "react"

class SkillTable extends Component {
    render() {
        return(
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody id="tbodySkills"></tbody>
            </table>
        )
    }
}

export default SkillTable;