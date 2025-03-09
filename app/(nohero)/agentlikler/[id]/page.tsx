import NotFound from '@/app/not-found';
import { agentsData } from '@/data/agents';
import React from 'react'

interface AgentDetailProps {
    params: {
        id: string
    }
}

export default async function AgentDetail ({params}:AgentDetailProps) {

    const agent_item = agentsData.find((agent) => agent.id === parseInt(params.id as string)); // parseInt(id as string)

    console.log(agent_item);

    if (!agent_item) {
        return NotFound(); // Hata durumunda 404 sayfasına yönlendir
    }
  return (
    <div>
        {
            agent_item.title
        }
    </div>
  )
}