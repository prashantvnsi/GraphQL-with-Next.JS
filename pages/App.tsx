import Head from 'next/head'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo';

const getAllArticles = gql`{
    bookings(limit: 10, filter: { matching: "a",timeState: upcoming, status: all }) {
      pageInfo{
        currentOffset
        totalPages
        totalCount
      }
      items {
        id
        service {
          status
          date
          passenger {
            firstName
          }
          pickupFlightDesignator {
            flightNumber
          }
        }
      }
    }
  }`
  
  export default function Home() {
    return (
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
        <Query query={getAllArticles}>
        {({ loading, error, data }) => {
          if (loading) return <p>Relax, it's worth the wait...</p>
          if (error) return <p>Looks like we've got a problem...</p>
          return (
            <div className="container">
              element,
              <div className="row">
                {data.bookings.pageInfo.totalPages}
              </div>
              <div className="row">
                {data.bookings.items[1].id}
              </div>
            </div>
          )
        }}
        </Query> 
      </div>
    )
  }
  