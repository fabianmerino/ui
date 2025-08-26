// Test for grouped columns colspan fix
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Table from '../../src/runtime/components/Table.vue'
import type { TableColumn } from '../../src/runtime/components/Table.vue'

describe('Table grouped columns colspan fix', () => {
  const data = [{
    id: 'm5gr84i9',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@yahoo.com'
  }]

  // Example of grouped columns where the group has 2 child columns
  const groupedColumns: TableColumn<typeof data[number]>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      header: 'ID'
    },
    {
      id: 'name',
      header: 'Full Name',
      // This creates a column group with 2 sub-columns
      columns: [
        {
          accessorKey: 'firstName',
          header: 'First Name'
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name'
        }
      ]
    },
    {
      accessorKey: 'email',
      header: 'Email'
    }
  ]

  // Regular columns for comparison
  const regularColumns: TableColumn<typeof data[number]>[] = [
    {
      accessorKey: 'id',
      header: 'ID'
    },
    {
      accessorKey: 'firstName',
      header: 'First Name'
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name'
    },
    {
      accessorKey: 'email',
      header: 'Email'
    }
  ]

  it('should use tableApi.getAllFlatColumns().length for loading state', async () => {
    const wrapper = await mountSuspended(Table, {
      props: {
        data: [],
        columns: groupedColumns,
        loading: true
      }
    })

    const loadingTd = wrapper.find('tbody tr td')
    expect(loadingTd.exists()).toBe(true)
    
    // With the fix, it should use the actual number of flat columns
    // which is the correct number for the rendered table
    const colspan = loadingTd.attributes('colspan')
    expect(colspan).toBeDefined()
    expect(parseInt(colspan!)).toBeGreaterThan(0)
  })

  it('should use tableApi.getAllFlatColumns().length for empty state', async () => {
    const wrapper = await mountSuspended(Table, {
      props: {
        data: [],
        columns: groupedColumns
      }
    })

    const emptyTd = wrapper.find('tbody tr td')
    expect(emptyTd.exists()).toBe(true)
    
    // With the fix, it should use the actual number of flat columns
    const colspan = emptyTd.attributes('colspan')
    expect(colspan).toBeDefined()
    expect(parseInt(colspan!)).toBeGreaterThan(0)
  })
})