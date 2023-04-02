import { ReqRickAndMortyApi, ResultCharacter } from "@/types/characters.type";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormContainer,
  FormGroup,
  Label,
  TextInput,
  SelectInput,
  Option,
  Button,
} from "./filter.styles";
const Filter = () => {
  const [state, setState] = useState({
    name: "",
    gender: "",
    status: "",
    species: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryParams = Object.entries(state)
      .filter(([key, value]) => value !== "")
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/character?${queryParams}`;
    console.log(url);

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "characters/setCharacters",
          payload: data as ReqRickAndMortyApi<ResultCharacter>,
        });
        setLoading(false);
      });
  };
  return (
    <FormContainer onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="name">Nome do Personagem:</Label>
        <TextInput
          onChange={(e) => setState({ ...state, name: e.target.value })}
          id="name"
          type="text"
          placeholder="Pesquisar..."
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="gender">Gênero:</Label>
        <SelectInput
          id="gender"
          onChange={(e) => setState({ ...state, gender: e.target.value })}
        >
          <Option value="">Selecione</Option>
          <Option value="male">Masculino</Option>
          <Option value="female">Feminino</Option>
        </SelectInput>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="status">Status:</Label>
        <SelectInput
          id="status"
          onChange={(e) => setState({ ...state, status: e.target.value })}
        >
          <Option value="">Selecione</Option>
          <Option value="alive">Vivo</Option>
          <Option value="dead">Morto</Option>
        </SelectInput>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="specie">Espécie:</Label>
        <SelectInput
          id="specie"
          onChange={(e) => setState({ ...state, species: e.target.value })}
        >
          <Option value="">Selecione</Option>
          <Option value="human">Humano</Option>
          <Option value="alien">Alien</Option>
          <Option value="animal">Animal</Option>
          <Option value="humanoid">Humanoid</Option>
          <Option value="mythological creature">Criatura Mítica</Option>
        </SelectInput>
      </FormGroup>
      <Button type="submit">Pesquisar</Button>
    </FormContainer>
  );
};

export default Filter;
