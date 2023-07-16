import { IconCircleArrowDown, IconCircleArrowUp } from "@tabler/icons-react";
import { IconCircleCheck } from '@tabler/icons-react';
import axios from "axios";
import { useEffect, useState } from "react";

interface ResidentesProps {
  residentes: [];
}

export default function CardTablePessoas(props: ResidentesProps) {

  return (
    <div className="grid lg:grid-cols-1 p-4 gap-1">
      <h1 className="text-xl text-black font-semibold">Pessoas</h1>
      <table className="w-full shadow-lg">
        <thead>
          <tr className="bg-blue-gray-500">
            <th
              className={
                "px-6 py-3 text-sm uppercase font-semibold text-left"
              }>Nome</th>
              <th
              className={
                "px-6 py-3 text-sm uppercase font-semibold text-left"
              }>Descrição</th>
            <th
              className={
                "px-6 py-3 text-sm uppercase font-semibold text-left"
              }>Apartamento</th>
            <th
              className={
                "px-6 py-3 text-sm uppercase font-semibold text-left"
              }>Status</th>
              <th
              className={
                "px-6 py-3 text-sm uppercase font-semibold text-left"
              }>Acesso</th>
              <th
              className={
                "px-6 py-3 text-sm uppercase font-semibold text-left"
              }>Saída</th>
            <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold bg-blue-500"
              }>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.residentes.map((r: any) => (
            <tr key={r.nome}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.nome}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.descricao}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.cpf}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                <div className="flex items-center">
                  <IconCircleCheck />
                  <span className="ml-3 text-black">
                    {r.telefone}
                  </span>
                </div>
              </td>
              <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.cpf}
              </td>
              <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.cpf}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm p-4 flex justify-around">
                <button className="bg-green-500 rounded-full">
                  <IconCircleArrowUp />
                </button>
                <button className="bg-red-500 rounded-full">
                  <IconCircleArrowDown />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}