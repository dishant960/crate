import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import AdminMenu from '../common/Menu'
import { Grid, GridCell } from '../../../ui/grid'
import EmptyMessage from '../../common/EmptyMessage'
import Loading from '../../common/Loading'


import { getList as getUsersList } from '../../manageUsers/api/actions'


class List extends PureComponent {

    componentDidMount() {
        this.props.getUsersList()
    }

    render() {
        const { isLoading, list } = this.props.users

        return (

            <div>
                {/* SEO */}
                <Helmet>
                    <title>Users - Admin - Crate</title>
                </Helmet>

                {/* Top menu bar */}
                <AdminMenu />

                {/* Page Content */}
                <div>

                    <Grid alignCenter={true} style={{ padding: '1em' }}>
                        <GridCell>
                            <table className="striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Created at</th>
                                        <th>Updated at</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        isLoading
                                            ? <tr>
                                                <td colSpan="4">
                                                    <Loading message="loading Users..." />
                                                </td>
                                            </tr>
                                            : list.length > 0
                                                ? list.map(({ id, name, email, createdAt, updatedAt }) => (
                                                    <tr key={id}>
                                                        <td>
                                                            {name}
                                                        </td>

                                                        <td>
                                                            {email}
                                                        </td>

                                                        <td>
                                                            {new Date(parseInt(createdAt)).toDateString()}
                                                        </td>

                                                        <td>
                                                            {new Date(parseInt(updatedAt)).toDateString()}
                                                        </td>

                                                    </tr>
                                                ))
                                                : <tr>
                                                    <td colSpan="4">
                                                        <EmptyMessage message="No users to show." />
                                                    </td>
                                                </tr>
                                    }
                                </tbody>
                            </table>
                        </GridCell>
                    </Grid>
                </div>
            </div>
        )
    }



}

List.propTypes = {
    users: PropTypes.object.isRequired,
    getUsersList: PropTypes.func.isRequired
  }

function listState(state) {
    return {
        users: state.users
    }
}

export default connect(listState, { getUsersList })(List)